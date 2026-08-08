import funkTrack from "@/assets/funbox/funk.mp3";

export type FunboxAudioHandle = {
  stop: () => void;
};

let sharedAudio: HTMLAudioElement | null = null;

function getAudio() {
  if (!sharedAudio) {
    sharedAudio = new Audio(funkTrack);
    sharedAudio.loop = true;
    sharedAudio.preload = "auto";
  }
  return sharedAudio;
}

export async function startFunboxAudio(volume = 0.55): Promise<FunboxAudioHandle> {
  const audio = getAudio();
  audio.volume = volume;

  try {
    await audio.play();
  } catch {
    /* autoplay blocked until user gesture — caller handles UI state */
    throw new Error("playback-blocked");
  }

  return {
    stop: () => {
      audio.pause();
      audio.currentTime = 0;
    },
  };
}

export function stopFunboxAudio() {
  if (!sharedAudio) return;
  sharedAudio.pause();
  sharedAudio.currentTime = 0;
}

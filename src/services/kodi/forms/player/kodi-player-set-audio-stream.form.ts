import { KodiApiService } from "../../services/kodi-api.service";

export class KodiPlayerSetAudioStreamForm {
  static submit(playerId: number, index: number) {
    return KodiApiService.doHttpAction("Player.SetAudioStream", {
      playerid: playerId,
      stream: index,
    });
  }
}

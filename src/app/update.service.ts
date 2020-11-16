import { Injectable } from "@angular/core";
import { SwUpdate } from "@angular/pwa";

@Injectable()
export class UpdateService {
  constructor(private swUpdate: SwUpdate) {
    this.swUpdate.available.subscribe((evt) => {
      alert("New Update Available");
    });
  }
}

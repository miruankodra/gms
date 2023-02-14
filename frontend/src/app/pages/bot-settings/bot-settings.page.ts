import { Component, OnInit } from '@angular/core';
import {BotService} from "../../services/bot.service";
import {Bots} from "../../models/bots";

@Component({
  selector: 'app-bot-settings',
  templateUrl: './bot-settings.page.html',
  styleUrls: ['./bot-settings.page.scss'],
})
export class BotSettingsPage implements OnInit {

  public bot: Bots[] = [];

  constructor(
      public botService: BotService,
  ) { }

  ngOnInit() {
    this.loadBot();
  }

  async loadBot () {
    let response  = await this.botService.findBot(1);
    if (response.success == true) {
      this.bot = response.data;
    } else {
      //
    }
  }

}

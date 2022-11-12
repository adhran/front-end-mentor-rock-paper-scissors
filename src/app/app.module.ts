import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { BtnRockComponent } from './main/btn-rock/btn-rock.component';
import { BtnPaperComponent } from './main/btn-paper/btn-paper.component';
import { BtnScissorComponent } from './main/btn-scissor/btn-scissor.component';
import { InitialStageComponent } from './main/initial-stage/initial-stage.component';
import { FinalStageComponent } from './main/final-stage/final-stage.component';
import { RulesPageComponent } from './footer/rules-page/rules-page.component';
import { WavesAnimationComponent } from './main/final-stage/waves-animation/waves-animation.component';
import { HousePickingComponent } from './main/house-picking/house-picking.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    BtnRockComponent,
    BtnPaperComponent,
    BtnScissorComponent,
    InitialStageComponent,
    FinalStageComponent,
    RulesPageComponent,
    WavesAnimationComponent,
    HousePickingComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

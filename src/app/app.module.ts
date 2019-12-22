// ng 核心模块
import { NgModule } from '@angular/core';
// ng 根组件
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';


@NgModule({
  declarations: [  /* 配置当前项目运行的模块*/
    AppComponent
  ],
  imports: [ /* 配置当前模块运行所需的其他模块*/
    CoreModule
  ],
  bootstrap: [AppComponent] /* 指定应用的主视图*/
})
export class AppModule { }

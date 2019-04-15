import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  senha: string;

  constructor(public alertController: AlertController, private router: Router) {}

  ngOnInit() {
  }

  async login() {
    if(this.email != undefined || this.senha != undefined) {
      this.router.navigate(['/home']);
    } else {
      const alert = await this.alertController.create({
        header: 'ERRO',
        message: 'Você deve informar seu email e senha.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  }

}

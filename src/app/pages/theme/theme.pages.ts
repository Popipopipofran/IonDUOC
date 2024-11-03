export class ThemePages {

    colorTheme: string;
  
    constructor(private navCtrl: NavController) { 
      this.colorTheme = 'light';
      document.body.setAttribute('color-theme', this.colorTheme);
      addIcons({ homeOutline, logOutOutline, arrowBackOutline });
    }
  
    changeTheme(event: any) {
      this.colorTheme = event.detail.value;
      document.body.setAttribute('color-theme', this.colorTheme);
    }
  
    goBack() {
      this.navCtrl.back();
    }
  
  }
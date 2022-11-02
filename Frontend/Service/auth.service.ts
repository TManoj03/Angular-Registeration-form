export class AuthService{
	
	isLogin = false;

	login(){
		this.isLogin = true;
	}
	logout(){
		this.isLogin = false;
	}

}
/*
 * Created with IntelliJ IDEA.
 * User: mfo
 * Date: 12/18/15
 * Time: 9:55 AM
 */
import {Component} from "@angular/core";
import {CookieService} from "../../services/cookies.service";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'public-page',
    directives: [],
    pipes: [],
    providers: [],
    template: `
<div class="pos-f-t">
    <navbar></navbar>
</div>
<div class="container">
    <div class="row">
        <div class="col-xs-5">
            <table class="table"> 
                <tr><td>I'm public: </td><td> {{xsrfCookie}}</td></tr>
                <tr><td>I'm logged in: </td><td> {{authenticated}}</td></tr>
                <tr><td>Cookie: </td><td>{{idCookie }}</td></tr>
                <tr><td>Token:</td><td> {{token}}</td></tr>
            </table>
        </div>
    </div>
</div>
`
})
export class PublicPage {
    constructor(private  cookies: CookieService, private authService: AuthService) {
    }

    get idCookie() {
        return this.cookies.getCookie('id');
    }

    get authenticated() {
        return this.authService.isAuthenticated();
    }

    get token() {
        return this.authService.getSession().token;
    }
}

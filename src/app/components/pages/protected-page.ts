/*
 * Created with IntelliJ IDEA.
 * User: mfo
 * Date: 12/18/15
 * Time: 9:56 AM
 */
import {Component} from "@angular/core";
import {PhotosComponent} from "../photos/photos.component";

@Component({
    selector: 'protected-page',
    directives: [PhotosComponent],
    pipes: [],
    template: `
<div class="pos-f-t">
    <navbar></navbar>
</div>

<photos></photos>
`
})
export class ProtectedPage {
    constructor() {
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    articles: any[] = [] 

    constructor() { }

    ngOnInit() {
        this.loadArticles();
    }

    loadArticles() {
        this.articles = [{
            title: "This is a title", 
            author: "Michael Fontanilla",
            date: new Date(),
            article: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis libero quis rhoncus porta. Praesent id laoreet eros. In et laoreet arcu. Integer sed ultrices elit. Integer mattis, risus eget pretium pulvinar, erat tellus suscipit eros, ac gravida massa purus eget tortor. Praesent sodales, nunc eget pretium facilisis, orci dolor volutpat mauris, vehicula ultricies nisl enim non sapien. Phasellus consequat congue faucibus. Maecenas urna arcu, tempor eget egestas quis, mattis quis nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec finibus aliquam accumsan. In hac habitasse platea dictumst. Proin vitae pulvinar eros.
            
            In interdum quam lectus, at pharetra magna ultricies eu. In venenatis rutrum metus a cursus. Sed non scelerisque dolor, vel commodo nibh. Vivamus fermentum quis neque sed placerat. Proin a consectetur purus. Nullam luctus in tellus non facilisis. Ut fermentum pulvinar tincidunt. Proin a ultricies felis, eu facilisis diam. Quisque sit amet pellentesque quam, malesuada varius elit. Fusce eros tellus, facilisis vel pellentesque quis, pharetra a ex. Proin sed nisi diam. Morbi vel augue augue. Suspendisse sollicitudin bibendum ante, et porttitor sapien porta sed. Suspendisse a risus nibh. Quisque a faucibus metus, vel cursus ante. Sed hendrerit libero et ante dictum dapibus.
            
            Quisque dapibus dignissim aliquet. Maecenas elit ipsum, congue at volutpat tincidunt, euismod tincidunt enim. Nunc mollis pellentesque dolor sed euismod. Ut lacinia erat sit amet congue dignissim. In molestie in nulla quis cursus. In at ornare metus. Ut tellus quam, pretium porttitor nisl efficitur, mollis tempus leo. Quisque suscipit nisl vitae enim tempus semper. Sed auctor sed metus eu maximus. Nulla tortor felis, feugiat at leo quis, pulvinar mollis arcu. Nullam pulvinar arcu at felis pellentesque, vitae malesuada justo posuere. Curabitur at interdum neque. Donec accumsan leo massa, vitae ullamcorper purus interdum a.`, 
            headerImage: "/assets/images/padoru_ishtar.jpg"
        }];
    }

}

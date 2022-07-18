'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">prorums documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b32f6f231f949c2590573b7e4f653c8cd30b76b96bc4756ac10c620bd92efd13b0161447620746cf3d5435003b30e20038afed33fe58c0556c1aba085d5b2f06"' : 'data-target="#xs-components-links-module-AppModule-b32f6f231f949c2590573b7e4f653c8cd30b76b96bc4756ac10c620bd92efd13b0161447620746cf3d5435003b30e20038afed33fe58c0556c1aba085d5b2f06"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b32f6f231f949c2590573b7e4f653c8cd30b76b96bc4756ac10c620bd92efd13b0161447620746cf3d5435003b30e20038afed33fe58c0556c1aba085d5b2f06"' :
                                            'id="xs-components-links-module-AppModule-b32f6f231f949c2590573b7e4f653c8cd30b76b96bc4756ac10c620bd92efd13b0161447620746cf3d5435003b30e20038afed33fe58c0556c1aba085d5b2f06"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopicsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopicsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AppModule-b32f6f231f949c2590573b7e4f653c8cd30b76b96bc4756ac10c620bd92efd13b0161447620746cf3d5435003b30e20038afed33fe58c0556c1aba085d5b2f06"' : 'data-target="#xs-directives-links-module-AppModule-b32f6f231f949c2590573b7e4f653c8cd30b76b96bc4756ac10c620bd92efd13b0161447620746cf3d5435003b30e20038afed33fe58c0556c1aba085d5b2f06"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-b32f6f231f949c2590573b7e4f653c8cd30b76b96bc4756ac10c620bd92efd13b0161447620746cf3d5435003b30e20038afed33fe58c0556c1aba085d5b2f06"' :
                                        'id="xs-directives-links-module-AppModule-b32f6f231f949c2590573b7e4f653c8cd30b76b96bc4756ac10c620bd92efd13b0161447620746cf3d5435003b30e20038afed33fe58c0556c1aba085d5b2f06"' }>
                                        <li class="link">
                                            <a href="directives/ToggleDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToggleDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ForumModule.html" data-type="entity-link" >ForumModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FulltopicModule.html" data-type="entity-link" >FulltopicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FulltopicModule-58e54c23e8961a4658dbd1f0d571012f2d46b91c9fff061fc0969e8be903f7b628d122e531627fc968797535e521cb843009391ea43675b79c75ce352127332a"' : 'data-target="#xs-components-links-module-FulltopicModule-58e54c23e8961a4658dbd1f0d571012f2d46b91c9fff061fc0969e8be903f7b628d122e531627fc968797535e521cb843009391ea43675b79c75ce352127332a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FulltopicModule-58e54c23e8961a4658dbd1f0d571012f2d46b91c9fff061fc0969e8be903f7b628d122e531627fc968797535e521cb843009391ea43675b79c75ce352127332a"' :
                                            'id="xs-components-links-module-FulltopicModule-58e54c23e8961a4658dbd1f0d571012f2d46b91c9fff061fc0969e8be903f7b628d122e531627fc968797535e521cb843009391ea43675b79c75ce352127332a"' }>
                                            <li class="link">
                                                <a href="components/FulltopicComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FulltopicComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IndexModule.html" data-type="entity-link" >IndexModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IndexModule-3a4377e26cb4ff8da11a1f30c224a73b39bda71dec30b9a62885f6021e95e7165f6a434d1abc7229909277eb013309f7f3ba87d23a4be7b60fc45341f015a99b"' : 'data-target="#xs-components-links-module-IndexModule-3a4377e26cb4ff8da11a1f30c224a73b39bda71dec30b9a62885f6021e95e7165f6a434d1abc7229909277eb013309f7f3ba87d23a4be7b60fc45341f015a99b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IndexModule-3a4377e26cb4ff8da11a1f30c224a73b39bda71dec30b9a62885f6021e95e7165f6a434d1abc7229909277eb013309f7f3ba87d23a4be7b60fc45341f015a99b"' :
                                            'id="xs-components-links-module-IndexModule-3a4377e26cb4ff8da11a1f30c224a73b39bda71dec30b9a62885f6021e95e7165f6a434d1abc7229909277eb013309f7f3ba87d23a4be7b60fc45341f015a99b"' }>
                                            <li class="link">
                                                <a href="components/CategoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForumComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForumComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-d4df2300300e10f0738e0c809d8aea9c850bc0269728db679825cc7cd6eb9eccab0f7a11dc13c97d02d49e73c218362d6b0471cd6a0fa17ae6d7567056e8b3da"' : 'data-target="#xs-components-links-module-SharedModule-d4df2300300e10f0738e0c809d8aea9c850bc0269728db679825cc7cd6eb9eccab0f7a11dc13c97d02d49e73c218362d6b0471cd6a0fa17ae6d7567056e8b3da"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-d4df2300300e10f0738e0c809d8aea9c850bc0269728db679825cc7cd6eb9eccab0f7a11dc13c97d02d49e73c218362d6b0471cd6a0fa17ae6d7567056e8b3da"' :
                                            'id="xs-components-links-module-SharedModule-d4df2300300e10f0738e0c809d8aea9c850bc0269728db679825cc7cd6eb9eccab0f7a11dc13c97d02d49e73c218362d6b0471cd6a0fa17ae6d7567056e8b3da"' }>
                                            <li class="link">
                                                <a href="components/AdvertisementsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdvertisementsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangelogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangelogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShorttopicsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShorttopicsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopicComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopicComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-da6677b2c971a4e0b9851aa0e25d297291535a8971b8168b7bc46be728f4fbc73c5e636a52f9ee834bf0f9ae33f18d354b5e33dcf87fcd4b2786c4ab6632325d"' : 'data-target="#xs-components-links-module-UserModule-da6677b2c971a4e0b9851aa0e25d297291535a8971b8168b7bc46be728f4fbc73c5e636a52f9ee834bf0f9ae33f18d354b5e33dcf87fcd4b2786c4ab6632325d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-da6677b2c971a4e0b9851aa0e25d297291535a8971b8168b7bc46be728f4fbc73c5e636a52f9ee834bf0f9ae33f18d354b5e33dcf87fcd4b2786c4ab6632325d"' :
                                            'id="xs-components-links-module-UserModule-da6677b2c971a4e0b9851aa0e25d297291535a8971b8168b7bc46be728f4fbc73c5e636a52f9ee834bf0f9ae33f18d354b5e33dcf87fcd4b2786c4ab6632325d"' }>
                                            <li class="link">
                                                <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Convert.html" data-type="entity-link" >Convert</a>
                            </li>
                            <li class="link">
                                <a href="classes/Convert-1.html" data-type="entity-link" >Convert</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ForumService.html" data-type="entity-link" >ForumService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThreadService.html" data-type="entity-link" >ThreadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TopicService.html" data-type="entity-link" >TopicService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Advertisement.html" data-type="entity-link" >Advertisement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Changelog.html" data-type="entity-link" >Changelog</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Config.html" data-type="entity-link" >Config</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Country.html" data-type="entity-link" >Country</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Forum.html" data-type="entity-link" >Forum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Fruit.html" data-type="entity-link" >Fruit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Language.html" data-type="entity-link" >Language</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProrumsResponse.html" data-type="entity-link" >ProrumsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Reaction.html" data-type="entity-link" >Reaction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Session.html" data-type="entity-link" >Session</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Thread.html" data-type="entity-link" >Thread</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Topic.html" data-type="entity-link" >Topic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Topics.html" data-type="entity-link" >Topics</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
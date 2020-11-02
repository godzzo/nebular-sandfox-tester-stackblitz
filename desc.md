
package.json
- "@nebular/eva-icons": "^6.2.1",
- "@nebular/theme": "^6.2.1",
- "eva-icons": "^1.1.2",

styles.scss
  @import 'themes';

  @import '~@nebular/theme/styles/globals';

  @include nb-install() {
    @include nb-theme-global();
  };

themes.scss
  @import '~@nebular/theme/styles/theming';
  @import '~@nebular/theme/styles/themes/default';

  $nb-themes: nb-register-theme((
    // add your variables here like:
    // color-bg: #4ca6ff,
  ), default, default);

app.module.ts
  @NgModule({
    imports:      [ 
      BrowserModule, 
      BrowserAnimationsModule,
      FormsModule,

      RouterModule.forRoot([]),

      NbThemeModule.forRoot({ name: 'default' }),
      NbLayoutModule,
      NbSidebarModule.forRoot(), //if this is your app.module
      NbButtonModule,

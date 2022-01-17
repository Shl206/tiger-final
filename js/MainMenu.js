Tiger.MainMenu = function (game) { };
Tiger.MainMenu.prototype = {
    create: function () {
        this.mainMenuBg = this.add.sprite(0, 0, 'mainMenuBg');
        this.add.button(240, 1160, 'button-start', this.startGame, this);
        this.overlay = this.add.sprite(550, 0, 'mobilelogo');
        this.overlay.visible = window.screen.width > 860 ? false : true;
        this.page1 = this.add.sprite(20, 220, 'page1');
    },
    startGame: function () {
        this.state.start('Game');
    }
};
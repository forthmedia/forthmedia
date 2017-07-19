// Menu manager
var Menu = function() {
    // singleton
    if (Menu.prototype._instance)
        return Menu.prototype._instance;

    Menu.prototype._instance = this;

    // private
    var menu_mobile = document.getElementById('menu_mobile');
    var menu_switch = document.getElementById('menu_switch');

    // protected
    this.ShowMenuHandler = function() {
        if (menu_mobile.classList.contains('hidden')) {
            menu_mobile.classList.remove('hidden');
            menu_switch.classList.remove('fm-black-hover');
            menu_switch.classList.add('fm-white-hover');
        } else {
            menu_mobile.classList.add('hidden');
            menu_switch.classList.remove('fm-white-hover');
            menu_switch.classList.add('fm-black-hover');
        }        
    }
};

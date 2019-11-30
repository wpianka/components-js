function onTabClick(event) {
    let activeTabs =  document.querySelectorAll('.tab-active');

    /* replace all class active to null
     case when we have the same name -active- both Tabs and  panel */
    activeTabs.forEach(function(tab) {
        tab.className = tab.className.replace('tab-active', '');
    });

    // activate new tab and panel
    event.target.parentElement.className += 'tab-active';
    document.getElementById(event.target.href.split('#')[1]).className += ' tab-active';
 
}

const element = document.getElementById('nav-tab');

element.addEventListener('click', onTabClick, false );
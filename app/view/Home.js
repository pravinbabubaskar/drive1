Ext.define('dirvercall.view.Home', {
    extend: 'Ext.tab.Panel',
    xtype: 'home',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',
        fullscreen: true,
        //layout: 'fit',

        items: [
            {
                xtype: 'container',
                title: 'Discover',
                iconCls: 'home',
                layout: 'fit',

                styleHtmlContent: true,
                //scrollable: true,

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Welcome to Sencha Touch 2'
                    }, {
                        xtype: "list",
                        styleHtmlContent: true,
                        itemTpl: 
                            ['<div>',
                            '<img src="{icon}">',
                            '{name}',
                            '</div>'].join(),
                        data: [
                            {name : 'Hello $', icon: "icon.jpg"},
                            {name : 'Hello $', icon: "icon.jpg"},
                            {name : 'Hello $', icon: "icon.jpg"},
                            {name : 'Hello $', icon: "icon.jpg"},
                            {name : 'Hello $', icon: "icon.jpg"},
                            {name : 'Hello $', icon: "icon.jpg"},
                            {name : 'Hello $', icon: "icon.jpg"},
                            {name : 'Hello $', icon: "icon.jpg"},
                            {name : 'Hello $', icon: "icon.jpg"},
                            {name : 'Hello $', icon: "icon.jpg"},
                            {name : 'Hello $', icon: "icon.jpg"},
                            {name : 'Hello $', icon: "icon.jpg"},
                            {name : 'Hello $', icon: "icon.jpg"},
                            {name : 'Hello $', icon: "icon.jpg"},
                            {name : 'Hello $', icon: "icon.jpg"},
                            {name : 'Hello $', icon: "icon.jpg"},
                            {name : 'Hello $', icon: "icon.jpg"},
                            {name : 'Hello $', icon: "icon.jpg"},
                            {name : 'Hello $', icon: "icon.jpg"},
                            {name : 'Hello $', icon: "icon.jpg"}
                        ]   
                    }
                ]
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});
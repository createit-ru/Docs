export const ruMenu = [
    {
        text: 'Компоненты',
        collapsed: false,
        items: [
            { text: 'ABTest', link: '/components/abtest' },
            { text: 'AjaxForm', link: '/components/ajaxform' },
            {
                text: 'AjaxFormItLogin',
                collapsed: true,
                items: [
                    {
                        text: 'Общие сведения',
                        link: '/components/ajaxformItlogin/general-information/index',
                        collapsed: true,
                        items: [
                            { text: 'Системные настройки', link: '/components/ajaxformItlogin/general-information/system-settings' },
                            { text: 'Скрипты и Стили', link: '/components/ajaxformItlogin/general-information/scripts-and-styles' },
                            { text: 'Системные события', link: '/components/ajaxformItlogin/general-information/system-events' },
                        ],
                    },
                    {
                        text: 'Сниппеты',
                        collapsed: true,
                        items: [
                            { text: 'aflActivateUser', link: '/components/ajaxformItlogin/snippets/ajaxformitlogin' },
                            { text: 'AjaxFormitLogin', link: '/components/ajaxformItlogin/snippets/aflactivateuser' },
                            { text: 'Кастомные сниппеты', link: '/components/ajaxformItlogin/snippets/custom-snippets' },
                        ],
                    },
                    {
                        text: 'Хуки',
                        collapsed: true,
                        items: [
                            { text: 'AjaxIdentification', link: '/components/ajaxformItlogin/hooks/ajaxidentification' },
                        ],
                    },
                    {
                        text: 'Валидаторы',
                        collapsed: true,
                        items: [
                            { text: 'aflCheckPassLength', link: '/components/ajaxformItlogin/validators/aflcheckpasslength' },
                            { text: 'aflPasswordConfirm', link: '/components/ajaxformItlogin/validators/aflpasswordconfirm' },
                            { text: 'aflRequiredIf', link: '/components/ajaxformItlogin/validators/aflrequiredif' },
                            { text: 'aflUserExists', link: '/components/ajaxformItlogin/validators/afluserexists' },
                            { text: 'aflUserNotExists', link: '/components/ajaxformItlogin/validators/aflusernotexists' },
                        ],
                    },
                ],
            },
            {
                text: 'amoCRM',
                collapsed: true,
                items: [
                    {
                        text: 'Возможности и быстрый старт',
                        link: '/components/amocrm/fast-start',
                    },
                    {
                        text: 'Установка и настройка',
                        link: '/components/amocrm/basic-setup',
                    },
                    {
                        text: 'Отправка данных из форм',
                        link: '/components/amocrm/submitting-forms',
                    },
                    {
                        text: 'Webhook',
                        link: '/components/amocrm/webhook',
                    },
                    {
                        text: 'События',
                        link: '/components/amocrm/events',
                    },
                    {
                        text: 'Распространенные ошибки',
                        link: '/components/amocrm/common-mistakes',
                    },
                ],
            },
            { text: 'autoRedirector', link: '/components/autoredirector' },
            { text: 'CallBack', link: '/components/callback' },
            { text: 'CitySelect', link: '/components/cityselect' },
            { text: 'ClickToCall', link: '/components/clicktocall' },
            { text: 'DebugParser', link: '/components/debugparser' },
            { text: 'DigitalSignage', link: '/components/digitalsignage' },
            { text: 'FrontendEditor', link: '/components/frontendeditor' },
            { text: 'frontTabs', link: '/components/fronttabs' },
            { text: 'Ideas', link: '/components/ideas' },
            { text: 'mdDocs', link: '/components/mddocs' },
            { text: 'mixedImage', link: '/components/mixedimage' },
            { text: 'modTree', link: '/components/modtree' },
            { text: 'modVkMarket', link: '/components/modvkmarket' },
            { text: 'NotFoundParamAlert', link: '/components/notfoundparamalert' },
            { text: 'PageSpeed', link: '/components/pagespeed' },
            { text: 'PromoDs', link: '/components/promods' },
            { text: 'ReachGoal', link: '/components/reachgoal' },
            { text: 'SEODomains', link: '/components/seodomains' },
            { text: 'SEO Suite', link: '/components/seosuite' },
            { text: 'simpleQueue', link: '/components/simplequeue' },
            { text: 'ViewsOnline', link: '/components/viewsonline' },
            { text: 'userMarker', link: '/components/usermarker' },
            { text: 'UsersOnline', link: '/components/usersonline' }
        ],
    },
]
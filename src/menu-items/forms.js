// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClipboardCheck, IconPictureInPicture, IconForms, IconPhone, IconMessage, IconUsers, IconPhoneCall } from '@tabler/icons';

// constant
const icons = {
    IconClipboardCheck,
    IconPictureInPicture,
    IconForms,
    IconPhone,
    IconMessage,
    IconPhoneCall,
    IconUsers
};

// ==============================|| UI FORMS MENU ITEMS ||============================== //

const forms = {
    id: 'ui-forms',
    title: <FormattedMessage id="management" />,
    icon: icons.IconPictureInPicture,
    type: 'group',
    children: [
        // {
        //     id: 'components',
        //     title: <FormattedMessage id="components" />,
        //     type: 'collapse',
        //     icon: icons.IconPictureInPicture,
        //     children: [
        //         {
        //             id: 'autocomplete',
        //             title: <FormattedMessage id="autocomplete" />,
        //             type: 'item',
        //             url: '/components/autocomplete',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'button',
        //             title: <FormattedMessage id="button" />,
        //             type: 'item',
        //             url: '/components/button',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'checkbox',
        //             title: <FormattedMessage id="checkbox" />,
        //             type: 'item',
        //             url: '/components/checkbox',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'date-time',
        //             title: <FormattedMessage id="date-time" />,
        //             type: 'item',
        //             url: '/components/date-time',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'radio',
        //             title: <FormattedMessage id="radio" />,
        //             type: 'item',
        //             url: '/components/radio',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'slider',
        //             title: <FormattedMessage id="slider" />,
        //             type: 'item',
        //             url: '/components/slider',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'switch',
        //             title: <FormattedMessage id="switch" />,
        //             type: 'item',
        //             url: '/components/switch',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'text-field',
        //             title: <FormattedMessage id="text-field" />,
        //             type: 'item',
        //             url: '/components/text-field',
        //             breadcrumbs: false
        //         }
        //     ]
        // },
        // {
        //     id: 'plugins',
        //     title: <FormattedMessage id="plugins" />,
        //     type: 'collapse',
        //     icon: icons.IconForms,
        //     children: [
        //         {
        //             id: 'frm-autocomplete',
        //             title: <FormattedMessage id="autocomplete" />,
        //             type: 'item',
        //             url: '/forms/frm-autocomplete',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'frm-mask',
        //             title: <FormattedMessage id="mask" />,
        //             type: 'item',
        //             url: '/forms/frm-mask',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'frm-clipboard',
        //             title: <FormattedMessage id="clipboard" />,
        //             type: 'item',
        //             url: '/forms/frm-clipboard',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'frm-recaptcha',
        //             title: <FormattedMessage id="recaptcha" />,
        //             type: 'item',
        //             url: '/forms/frm-recaptcha',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'frm-wysiwug',
        //             title: <FormattedMessage id="wysiwug-editor" />,
        //             type: 'item',
        //             url: '/forms/frm-wysiwug',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'frm-modal',
        //             title: <FormattedMessage id="modal" />,
        //             type: 'item',
        //             url: '/forms/frm-modal',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'frm-tooltip',
        //             title: <FormattedMessage id="tooltip" />,
        //             type: 'item',
        //             url: '/forms/frm-tooltip'
        //         }
        //     ]
        // },
        // {
        //     id: 'layouts',
        //     title: 'Layouts',
        //     type: 'collapse',
        //     icon: icons.IconForms,
        //     children: [
        //         {
        //             id: 'frm-layouts',
        //             title: <FormattedMessage id="layouts" />,
        //             type: 'item',
        //             url: '/forms/layouts/layouts'
        //         },
        //         {
        //             id: 'frm-multi-column-forms',
        //             title: <FormattedMessage id="multi-column-forms" />,
        //             type: 'item',
        //             url: '/forms/layouts/multi-column-forms'
        //         },
        //         {
        //             id: 'frm-action-bar',
        //             title: <FormattedMessage id="action-bar" />,
        //             type: 'item',
        //             url: '/forms/layouts/action-bar'
        //         },
        //         {
        //             id: 'frm-sticky-action-bar',
        //             title: <FormattedMessage id="sticky-action-bar" />,
        //             type: 'item',
        //             url: '/forms/layouts/sticky-action-bar'
        //         }
        //     ]
        // },
        {
            id: 'forms-wizard',
            title: <FormattedMessage id="reseller_manage" />,
            type: 'item',
            url: '/forms/reseller-manage',
            icon: icons.IconUsers
        },
        {
            id: 'tables',
            title: <FormattedMessage id="did" />,
            type: 'collapse',
            icon: icons.IconPhone,
            children: [
                {
                    id: 'did',
                    title: <FormattedMessage id="did-table" />,
                    type: 'item',
                    url: '/did-porting/did_table'
                },
                {
                    id: 'porting',
                    title: <FormattedMessage id="porting-table" />,
                    type: 'item',
                    url: '/did-porting/porting_table'
                }
            ]
        },
        {
            id: 'msg',
            title: <FormattedMessage id="msg" />,
            type: 'item',
            url: '/forms/messaging',
            icon: icons.IconMessage
        },
        {
            id: 'voice',
            title: <FormattedMessage id="voice" />,
            type: 'collapse',
            icon: icons.IconPhoneCall,
            children: [
                {
                    id: 'sip_trunk',
                    title: <FormattedMessage id="sip_trunk" />,
                    type: 'item',
                    url: ''
                },
                {
                    id: 'outbound_profile',
                    title: <FormattedMessage id="outbound_profile" />,
                    type: 'item',
                    url: '/voice/outbound_profile'
                }
            ]
        }
    ]
};

export default forms;

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
    IconKey,
    IconChartRadar,
    IconBug,
    IconBellRinging,
    IconPhoneCall,
    IconQuestionMark,
    IconShieldLock,
    IconUser
} from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconChartRadar,
    IconBug,
    IconBellRinging,
    IconPhoneCall,
    IconQuestionMark,
    IconShieldLock,
    IconUser
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'settings',
    title: <FormattedMessage id="settings" />,
    icon: icons.IconKey,
    type: 'group',
    children: [
        {
            id: 'report',
            title: <FormattedMessage id="report" />,
            type: 'collapse',
            icon: icons.IconChartRadar,
            children: [
                {
                    id: 'price1',
                    title: <FormattedMessage id="reporting" />,
                    type: 'item',
                    url: '/pages/price/price1'
                },
                {
                    id: 'price1',
                    title: <FormattedMessage id="call_recording" />,
                    type: 'item',
                    url: '/pages/price/price1'
                }
            ]
        },
        {
            id: 'account',
            title: <FormattedMessage id="account" />,
            type: 'collapse',
            icon: icons.IconUser,
            children: [
                {
                    id: 'price1',
                    title: <FormattedMessage id="my_account" />,
                    type: 'item',
                    url: '/pages/price/price1'
                },
                {
                    id: 'price1',
                    title: <FormattedMessage id="billing" />,
                    type: 'item',
                    url: '/pages/price/price1'
                }
            ]
        }
    ]
};

export default pages;

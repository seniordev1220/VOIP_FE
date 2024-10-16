// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconKey, IconReceipt2, IconBug, IconBellRinging, IconPhoneCall, IconQuestionMark, IconShieldLock } from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconReceipt2,
    IconBug,
    IconBellRinging,
    IconPhoneCall,
    IconQuestionMark,
    IconShieldLock
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: <FormattedMessage id="pages" />,
    caption: <FormattedMessage id="pages-caption" />,
    icon: icons.IconKey,
    type: 'group',
    children: [
        {
            id: 'price',
            title: <FormattedMessage id="pricing" />,
            type: 'collapse',
            icon: icons.IconReceipt2,
            children: [
                {
                    id: 'price1',
                    title: (
                        <>
                            <FormattedMessage id="price" /> 01
                        </>
                    ),
                    type: 'item',
                    url: '/pages/price/price1'
                },
                {
                    id: 'price2',
                    title: (
                        <>
                            <FormattedMessage id="price" /> 02
                        </>
                    ),
                    type: 'item',
                    url: '/pages/price/price2'
                }
            ]
        }
    ]
};

export default pages;

import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const DashboardAnalytics = Loadable(lazy(() => import('views/dashboard/Analytics')));

const DidTable = Loadable(lazy(() => import('views/forms/did-porting/DidTable')));
const PortingTable = Loadable(lazy(() => import('views/forms/did-porting/PortingTable')));
const BuyNewNumber = Loadable(lazy(() => import('views/forms/did-porting/buyNumber')));

// forms validation
const FrmFormsValidation = Loadable(lazy(() => import('views/forms/forms-validation')));
const FrmResellerManage = Loadable(lazy(() => import('views/forms/reseller_manage')));
const FrmAddNewReseller = Loadable(lazy(() => import('views/forms/reseller_manage/add_new_reseller')));

const OutboundProfile = Loadable(lazy(() => import('views/forms/voice/outbound_profile')));
const NewOutboundProfile = Loadable(lazy(() => import('views/forms/voice/outbound_profile/add_new_profile')));
const EditOutboundProfile = Loadable(lazy(() => import('views/forms/voice/outbound_profile/edit_new_profile')));

// chart routing
const ChartApexchart = Loadable(lazy(() => import('views/forms/chart/Apexchart')));
const OrgChartPage = Loadable(lazy(() => import('views/forms/chart/OrgChart')));

// basic ui-elements routing
const BasicUIAccordion = Loadable(lazy(() => import('views/ui-elements/basic/UIAccordion')));
const BasicUIAvatar = Loadable(lazy(() => import('views/ui-elements/basic/UIAvatar')));
const BasicUIBadges = Loadable(lazy(() => import('views/ui-elements/basic/UIBadges')));
const BasicUIBreadcrumb = Loadable(lazy(() => import('views/ui-elements/basic/UIBreadcrumb')));
const BasicUICards = Loadable(lazy(() => import('views/ui-elements/basic/UICards')));
const BasicUIChip = Loadable(lazy(() => import('views/ui-elements/basic/UIChip')));
const BasicUIList = Loadable(lazy(() => import('views/ui-elements/basic/UIList')));
const BasicUITabs = Loadable(lazy(() => import('views/ui-elements/basic/UITabs')));

// advance ui-elements routing
const AdvanceUIAlert = Loadable(lazy(() => import('views/ui-elements/advance/UIAlert')));
const AdvanceUIDialog = Loadable(lazy(() => import('views/ui-elements/advance/UIDialog')));
const AdvanceUIPagination = Loadable(lazy(() => import('views/ui-elements/advance/UIPagination')));
const AdvanceUIProgress = Loadable(lazy(() => import('views/ui-elements/advance/UIProgress')));
const AdvanceUIRating = Loadable(lazy(() => import('views/ui-elements/advance/UIRating')));
const AdvanceUISnackbar = Loadable(lazy(() => import('views/ui-elements/advance/UISnackbar')));
const AdvanceUISkeleton = Loadable(lazy(() => import('views/ui-elements/advance/UISkeleton')));
const AdvanceUISpeeddial = Loadable(lazy(() => import('views/ui-elements/advance/UISpeeddial')));
const AdvanceUITimeline = Loadable(lazy(() => import('views/ui-elements/advance/UITimeline')));
const AdvanceUIToggleButton = Loadable(lazy(() => import('views/ui-elements/advance/UIToggleButton')));
const AdvanceUITreeview = Loadable(lazy(() => import('views/ui-elements/advance/UITreeview')));

// pricing page routing
const PagesPrice1 = Loadable(lazy(() => import('views/pages/pricing/Price1')));
const PagesPrice2 = Loadable(lazy(() => import('views/pages/pricing/Price2')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsAnimation = Loadable(lazy(() => import('views/utilities/Animation')));
const UtilsGrid = Loadable(lazy(() => import('views/utilities/Grid')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/did-porting/did_table',
            element: <DidTable />
        },

        {
            path: '/did-porting/buy_new_number',
            element: <BuyNewNumber />
        },

        {
            path: '/did-porting/porting_table',
            element: <PortingTable />
        },

        {
            path: 'forms/charts/apexchart',
            element: <ChartApexchart />
        },
        {
            path: '/forms/charts/orgchart',
            element: <OrgChartPage />
        },
        {
            path: '/forms/forms-validation',
            element: <FrmFormsValidation />
        },
        {
            path: '/forms/reseller-manage',
            element: <FrmResellerManage />
        },
        {
            path: '/forms/add_new_reseller',
            element: <FrmAddNewReseller />
        },

        {
            path: '/voice/outbound_profile',
            element: <OutboundProfile />
        },
        {
            path: '/voice/outbound_profile/create',
            element: <NewOutboundProfile />
        },
        {
            path: '/voice/outbound_profile/edit',
            element: <EditOutboundProfile />
        },

        {
            path: '/basic/accordion',
            element: <BasicUIAccordion />
        },
        {
            path: '/basic/avatar',
            element: <BasicUIAvatar />
        },
        {
            path: '/basic/badges',
            element: <BasicUIBadges />
        },
        {
            path: '/basic/breadcrumb',
            element: <BasicUIBreadcrumb />
        },
        {
            path: '/basic/cards',
            element: <BasicUICards />
        },
        {
            path: '/basic/chip',
            element: <BasicUIChip />
        },
        {
            path: '/basic/list',
            element: <BasicUIList />
        },
        {
            path: '/basic/tabs',
            element: <BasicUITabs />
        },

        {
            path: '/advance/alert',
            element: <AdvanceUIAlert />
        },
        {
            path: '/advance/dialog',
            element: <AdvanceUIDialog />
        },
        {
            path: '/advance/pagination',
            element: <AdvanceUIPagination />
        },
        {
            path: '/advance/progress',
            element: <AdvanceUIProgress />
        },
        {
            path: '/advance/rating',
            element: <AdvanceUIRating />
        },
        {
            path: '/advance/snackbar',
            element: <AdvanceUISnackbar />
        },
        {
            path: '/advance/skeleton',
            element: <AdvanceUISkeleton />
        },
        {
            path: '/advance/speeddial',
            element: <AdvanceUISpeeddial />
        },
        {
            path: '/advance/timeline',
            element: <AdvanceUITimeline />
        },
        {
            path: '/advance/toggle-button',
            element: <AdvanceUIToggleButton />
        },
        {
            path: '/advance/treeview',
            element: <AdvanceUITreeview />
        },

        {
            path: '/pages/price/price1',
            element: <PagesPrice1 />
        },
        {
            path: '/pages/price/price2',
            element: <PagesPrice2 />
        },

        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/utils/util-animation',
            element: <UtilsAnimation />
        },
        {
            path: '/utils/util-grid',
            element: <UtilsGrid />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/analytics',
            element: <DashboardAnalytics />
        }
    ]
};

export default MainRoutes;

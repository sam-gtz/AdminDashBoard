
import Header from '../components/common/Header';
import OverviewCards from '../components/analytics/OverviewCards';
import RevenueChart from '../components/analytics/RevenueChart';
import ChannelPerformance from '../components/analytics/ChannelPerformance';
import UserRetention from '../components/analytics/UserRetention';
import CustomerSegmentaion from '../components/analytics/CustomerSegmentation';
import CustomerPerformance from '../components/analytics/CustomerPerformance';
import AIPoweredInsights from '../components/analytics/AIPoweredInsights';

const AnalyticsPage = () => {
    return (

        <> 
            <Header title={"You Did it!"} /> 
            <OverviewCards />
            <RevenueChart />
            <ChannelPerformance />
            <UserRetention />
            <CustomerSegmentaion />
            <CustomerPerformance />
            <AIPoweredInsights />
        </>
        

    )
};


export default AnalyticsPage;
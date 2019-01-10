import { Route, } from 'react-router-dom';
import React, { Component } from "react";
import CarManagement from 'containers/private/management/car/index';
import PartnerManagement from 'containers/private/management/partner/index';
import OrderManagement from 'containers/private/management/orders/index';
import TypecarManagement from 'containers/private/management/typecar/index';
import CustomerManagement from 'containers/private/management/customer/index';
import FeatureManagement from 'containers/private/management/feature/index';
import LocationManagement from 'containers/private/management/location/index';
import PackagesManagement from 'containers/private/management/packages/index';
import PaymentManagement from 'containers/private/management/payment/index';
import ProcedureManagement from 'containers/private/management/procedure/index';
const adminRoutes = [
  {
    path: "car",
    exact: false,
    component: ()=> <CarManagement/>
  },
  {
    path: "partner",
    exact: false,
    component: ()=> <PartnerManagement/>
  },
  {
    path: "oders",
    exact: false,
    component: ()=> <OrderManagement/>
  },
  {
    path: "typecar",
    exact: false,
    component: ()=> <TypecarManagement/>
  },
  {
    path: "customer",
    exact: false,
    component: ()=> <CustomerManagement/>
  },
  
  {
    path: "feature",
    exact: false,
    component: ()=> <FeatureManagement/>
  },
  {
    path: "location",
    exact: false,
    component: ()=> <LocationManagement/>
  },
  {
    path: "packages",
    exact: false,
    component: ()=> <PackagesManagement/>
  },
  {
    path: "payment",
    exact: false,
    component: ()=> <PaymentManagement/>
  },
  {
    path: "procedure",
    exact: false,
    component: ()=> <ProcedureManagement/>
  },
 
];

class AppRouter extends Component { 
  render() {
    const { url, style } = this.props;
    return (
      <div style={style}>
        {adminRoutes.map(singleRoute => {
          const { path,component, exact, ...otherProps } = singleRoute;
          return (
            <Route
              exact={exact === false ? false : true}
              key={path}
              path={`${url}/${path}`}
              component={component}
              {...otherProps}
            />
          );
        })}
      </div>
    );
  }
}

export default AppRouter;

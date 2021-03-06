import React, { Component } from 'react';

import CategoryList from './CategoryList/CategoryList';
import FilterByPrice from './FilterByPrice/FilterByPrice';

import './Sidebar.css';

export default class SideBar extends Component {
  render () {
    return (
      <div className="sidebar">
        <CategoryList categories={this.props.categories} onSelectedCategoryChanged={this.props.onSelectedCategoryChanged}/>
        <FilterByPrice bounce={this.props.bounce} defaultValue={this.props.filterPrice} onFilterPriceChanged={this.props.onFilterPriceChanged}/>
      </div>
    );
  }
}

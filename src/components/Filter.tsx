import React from "react";
import {VehicleFilter, VehicleType} from "../data/vehicles/contracts";
import {VehicleTypeSelect} from "./VehicleTypeSelect";
import {Input} from "@skbkontur/react-ui";

//Создание props для Filter
interface FilterProps {
    filter: VehicleFilter;
    change: (filter: VehicleFilter) => void;
}

export class Filter extends React.Component<FilterProps> {
    render(): React.ReactNode {
        return <>
            <VehicleTypeSelect
                value={this.props.filter.type}
                onChange={this.handleTypeChange}
            />
            <Input
                value={this.props.filter.title}
                onValueChange={this.handleTitleChange}
            />
        </>;
    }

    private handleTitleChange = (title: string): void => {
        this.props.change({ ...this.props.filter, title });
    };

    private handleTypeChange = (type: VehicleType | null): void => {
        this.props.change({ ...this.props.filter, type });
    };
}

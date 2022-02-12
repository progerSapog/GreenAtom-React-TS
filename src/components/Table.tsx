import React from "react";
import { CurrencyLabel } from "@skbkontur/react-ui";
import {Vehicle, vehicleTypeTitles} from "../data/vehicles/contracts";

// Указываем типы prop-ов для TableItem:
//  просто объект Vehicle и число
interface TableItemProps {
    vehicle: Vehicle;
    number: number;
}

// Указываем типы prop-ов для Table:
//  массив объектов Vehicle
interface TableProps {
    vehicles: Vehicle[];
}

// Из словаря по ключу получаем строковое представление ТС
//  {vehicleTypeTitles[vehicle.type]}
const TableItem: React.FC<TableItemProps> = ({ vehicle, number }) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{vehicleTypeTitles[vehicle.type]}</td>
            <td>{vehicle.title}</td>
            <td>
                <CurrencyLabel value={vehicle.price} fractionDigits={2} />
            </td>
        </tr>
    );
};

export const Table: React.FC<TableProps> = ({ vehicles }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Тип ТС</th>
                <th>Название</th>
                <th>Цена, ₽</th>
            </tr>
            </thead>
            <tbody>
            {vehicles.map((x, i) => (
                <TableItem key={x.id} number={i + 1} vehicle={x} />
            ))}
            </tbody>
        </table>
    );
};

import { type TCardHeaderType } from "../../components/CardHeader/interface"

export interface ITrackerStateItem {
    date: number
    hours: number
}

export interface TrackerStateModel extends Record<TCardHeaderType, ITrackerStateItem[]> {

}

export interface ActionFixTime {
    hours: number
    type: TCardHeaderType
}

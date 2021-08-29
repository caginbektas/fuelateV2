import { FuelLog } from "./FuelLog";

export class Statistics{
    private fuelLogs: FuelLog[];
    private _totalKM: string;
    private _avgLPerHundredKm: string;
    private _lastLPerHundredKm: string;
    private _bestLPerHundredKm: string;
    private _totalFuelCost: string;
    private _totalLiters: string;
    private _avgCityDrive: string;
    private _fuelEfficiency: any;
    private _firstFuelDate: any;
    private _lastFuelDate: any;
    
    public get totalKM(): string {
        return this._totalKM;
    }
    public get avgLPerHundredKm(): string {
        return this._avgLPerHundredKm;
    }
    public get lastLPerHundredKm(): string {
        return this._lastLPerHundredKm;
    }
    public get bestLPerHundredKm(): string {
        return this._bestLPerHundredKm;
    }
    public get totalFuelCost(): string {
        return this._totalFuelCost;
    }
    public get totalLiters(): string {
        return this._totalLiters;
    }
    public get avgCityDrive(): string {
        return this._avgCityDrive;
    }
    public get fuelEfficiency(): any {
        return this._fuelEfficiency;
    }
    public get firstFuelDate(): any {
        return this._firstFuelDate;
    }
    public get lastFuelDate(): any {
        return this._lastFuelDate;
    }

    constructor(fuelLogs?: FuelLog[]){
        this.fuelLogs = fuelLogs;
        this._totalKM = this.getTotalKM()?.toFixed(0);
        this._avgLPerHundredKm = this.getavgLPerHundredKm()?.toFixed(1);
        this._lastLPerHundredKm = this.getLastLPerHundredKm()?.toFixed(1);
        this._bestLPerHundredKm = this.getBestLPerHundredKm()?.toFixed(1);
        this._totalFuelCost = this.getTotalFuelCost()?.toFixed(0);
        this._totalLiters = this.getTotalLiters()?.toFixed(0);
        this._avgCityDrive = this.getAvgCityDrive()?.toFixed(0);
        this._fuelEfficiency = this.fuelLogs?.sort((a, b) => (a.date > b.date) ? 1 : -1).map(a => a.litersPerHundredKm);
        this._firstFuelDate = this.getFirstFuelDate();
        this._lastFuelDate = this.getLastFuelDate();
    }

    private getTotalKM(){
        return this.fuelLogs?.reduce( function(a, b){
          return a + b['distance'];
        }, 0);
      }
    
    private getavgLPerHundredKm(){
        let totalLPerHundredKm = this.fuelLogs?.reduce( function(a, b){
            return a + b['litersPerHundredKm'];
        }, 0);
        return totalLPerHundredKm/this.fuelLogs?.length;
    }
    
    private getLastLPerHundredKm(){
        if (this.fuelLogs)
            return this.fuelLogs[this.fuelLogs.length-1].litersPerHundredKm;
    }

    private getBestLPerHundredKm(): number{
        return this.fuelLogs?.sort((a, b) => (a.litersPerHundredKm > b.litersPerHundredKm) ? 1 : -1)[0].litersPerHundredKm;
    }

    private getTotalFuelCost(){
        return this.fuelLogs?.reduce( function(a, b){
            return a + b['total'];
        }, 0);
    }

    private getAvgCityDrive(){
        let totalCityDrive = this.fuelLogs?.reduce( function(a, b){
            return a + b['cityPercentage'];
        }, 0);
        return totalCityDrive/this.fuelLogs?.length;
    }

    private getTotalLiters(){
        return this.fuelLogs?.reduce( function(a, b){
            return a + b['liter'];
        }, 0);
    }

    private getFirstFuelDate(){
        if (this.fuelLogs)
            return new Date(Number(this.fuelLogs[0].date)).toLocaleDateString();
    }

    private getLastFuelDate(){
        if (this.fuelLogs)
            return new Date(Number(this.fuelLogs[this.fuelLogs.length-1].date)).toLocaleDateString();
    }
}
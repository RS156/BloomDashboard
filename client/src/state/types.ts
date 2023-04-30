export interface KpiResponse 
{
_v:number,
_id:String,
dailyData: Array<daily>,
expensesByCategory:Array<expenses>,
monthlyData:Array<month>,
totalExpenses:String,
totalProfit:String,
totalRevenue:String,
updatedAt:String,

}

interface daily {
    _id:String,
    date:String,
    expenses:String,
    revenue:String
}

interface expenses{
    salaries:String,
    supplies:String,
    services:String
}

interface month{
    _id:String,
    month:String,
    revenue:String,
    expenses:String,
    nonOperationalExpenses:String,
    operationalExpenses:String
}


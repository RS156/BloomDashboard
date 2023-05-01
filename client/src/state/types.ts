export interface KpiResponse 
{
_v:number,
_id:String,
dailyData: Array<daily>,
expensesByCategory:Array<expenses>,
monthlyData:Array<month>,
totalExpenses:number,
totalProfit:number,
totalRevenue:number,
targetRevenue:number
updatedAt:String,
}

interface daily {
    _id:String,
    date:String,
    expenses:number,
    revenue:number
}

interface expenses{
    salaries:number,
    supplies:number,
    services:number
}

interface month{
    _id:String,
    month:String,
    revenue:number,
    expenses:number,
    nonOperationalExpenses:number,
    operationalExpenses:number
}

export interface ProductResponse{
    _id:String,    
    price:number,
    expense:number,
    transactions:Array<String>
}


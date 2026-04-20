"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, Calendar, DollarSign, TrendingUp, Clock } from "lucide-react";

export default function RoiCalculator() {
  const [investment, setInvestment] = useState(80000);
  const [occupancy, setOccupancy] = useState(72);
  const [rate, setRate] = useState(120);
  const [expenses, setExpenses] = useState(30);

  const metrics = useMemo(() => {
    const daysInMonth = 30.4;
    const grossMonthly = rate * daysInMonth * (occupancy / 100);
    const expensesMonthly = grossMonthly * (expenses / 100);
    const netMonthly = grossMonthly - expensesMonthly;
    const netAnnual = netMonthly * 12;
    const roi = (netAnnual / investment) * 100;
    const paybackYears = investment / netAnnual;

    return {
      grossMonthly,
      netMonthly,
      netAnnual,
      roi,
      paybackYears,
      occupiedDays: Math.round(daysInMonth * (occupancy / 100)),
    };
  }, [investment, occupancy, rate, expenses]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

  return (
    <section className="py-20 bg-stone-950 text-stone-200" id="calculadora">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Calcula tu <span className="text-yellow-600 font-medium">Retorno de Inversión</span>
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            Ajusta los parámetros y visualiza en tiempo real tu proyección de ingresos pasivos.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-8 bg-stone-900/50 p-8 rounded-2xl border border-stone-800 backdrop-blur-sm">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-stone-300">Monto de inversión</label>
                <span className="text-yellow-500 font-mono">{formatCurrency(investment)}</span>
              </div>
              <input type="range" min="50000" max="500000" step="5000" value={investment} onChange={(e) => setInvestment(Number(e.target.value))} className="w-full accent-yellow-600" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-stone-300">Tasa de ocupación</label>
                <span className="text-yellow-500 font-mono">{occupancy}%</span>
              </div>
              <input type="range" min="40" max="95" step="1" value={occupancy} onChange={(e) => setOccupancy(Number(e.target.value))} className="w-full accent-yellow-600" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-stone-300">Tarifa nocturna</label>
                <span className="text-yellow-500 font-mono">{formatCurrency(rate)}</span>
              </div>
              <input type="range" min="60" max="400" step="5" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-yellow-600" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-stone-300">Gastos operativos</label>
                <span className="text-yellow-500 font-mono">{expenses}%</span>
              </div>
              <input type="range" min="15" max="50" step="1" value={expenses} onChange={(e) => setExpenses(Number(e.target.value))} className="w-full accent-yellow-600" />
            </div>
          </div>

          <div className="lg:col-span-7 bg-gradient-to-br from-stone-900 to-stone-950 p-8 rounded-2xl border border-stone-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-yellow-600/5 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="mb-10 text-center">
              <p className="text-sm text-stone-400 uppercase tracking-widest mb-2">ROI Anual Proyectado</p>
              <motion.div key={metrics.roi} initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-6xl md:text-7xl font-light text-yellow-500">
                {metrics.roi.toFixed(1)}%
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <MetricCard icon={<DollarSign size={20} />} label="Ingreso Mensual Neto" value={formatCurrency(metrics.netMonthly)} highlight />
              <MetricCard icon={<TrendingUp size={20} />} label="Ingreso Anual Neto" value={formatCurrency(metrics.netAnnual)} highlight />
              <MetricCard icon={<Calculator size={20} />} label="Ingreso Bruto / Mes" value={formatCurrency(metrics.grossMonthly)} />
              <MetricCard icon={<Calendar size={20} />} label="Noches Ocupadas" value={`${metrics.occupiedDays} / mes`} />
              <div className="col-span-2">
                <MetricCard icon={<Clock size={20} />} label="Recuperación de Capital" value={`${metrics.paybackYears.toFixed(1)} años`} />
              </div>
            </div>
            
            <button className="w-full mt-8 bg-yellow-600 hover:bg-yellow-500 text-stone-950 font-medium py-4 rounded-lg transition-colors">
              Quiero este retorno — Solicitar Dossier
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ icon, label, value, highlight = false }: { icon: React.ReactNode, label: string, value: string, highlight?: boolean }) {
  return (
    <div className={`p-4 rounded-xl border ${highlight ? 'bg-stone-800/80 border-stone-700' : 'bg-stone-900/40 border-stone-800/50'}`}>
      <div className="flex items-center gap-3 mb-2 text-stone-400">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>
      <div className={`text-2xl font-semibold ${highlight ? 'text-white' : 'text-stone-300'}`}>
        {value}
      </div>
    </div>
  );
}

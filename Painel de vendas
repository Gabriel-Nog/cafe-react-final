import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { saveAs } from "file-saver";

const fetchData = async (period) => {
  // Simulação de dados dinâmicos
  return {
    vendas: Math.floor(Math.random() * 5000),
    usuarios: Math.floor(Math.random() * 1000),
    historico: [
      { name: "Seg", vendas: Math.random() * 2000, usuarios: Math.random() * 500 },
      { name: "Ter", vendas: Math.random() * 2500, usuarios: Math.random() * 600 },
      { name: "Qua", vendas: Math.random() * 1800, usuarios: Math.random() * 400 },
      { name: "Qui", vendas: Math.random() * 3200, usuarios: Math.random() * 700 },
      { name: "Sex", vendas: Math.random() * 4000, usuarios: Math.random() * 800 },
    ],
  };
};

export default function Dashboard() {
  const [periodo, setPeriodo] = useState("Semana");
  const [dados, setDados] = useState({ vendas: 0, usuarios: 0, historico: [] });

  useEffect(() => {
    const atualizarDados = async () => {
      const novosDados = await fetchData(periodo);
      setDados(novosDados);
    };
    atualizarDados();
    const interval = setInterval(atualizarDados, 5000);
    return () => clearInterval(interval);
  }, [periodo]);

  const corVendas = dados.vendas > 3000 ? "bg-green-500" : "bg-red-500";
  const corUsuarios = dados.usuarios > 500 ? "bg-blue-500" : "bg-yellow-500";

  const exportarCSV = () => {
    const csvData = `Período,Vendas,Usuários\n${periodo},${dados.vendas},${dados.usuarios}`;
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "dashboard_dados.csv");
  };

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-4">
        {["Hoje", "Semana", "Mês", "Ano"].map((p) => (
          <Button key={p} variant={periodo === p ? "default" : "outline"} onClick={() => setPeriodo(p)}>
            {p}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className={`p-4 flex items-center gap-4 text-white ${corVendas}` }>
          <DollarSign size={32} />
          <div>
            <h2 className="text-lg font-semibold">Total de Vendas</h2>
            <p className="text-2xl font-bold">R$ {dados.vendas.toLocaleString()}</p>
          </div>
        </Card>
        <Card className={`p-4 flex items-center gap-4 text-white ${corUsuarios}` }>
          <Users size={32} />
          <div>
            <h2 className="text-lg font-semibold">Usuários Cadastrados</h2>
            <p className="text-2xl font-bold">{dados.usuarios.toLocaleString()}</p>
          </div>
        </Card>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Histórico de Dados</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dados.historico}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="vendas" stroke="#4CAF50" strokeWidth={2} />
            <Line type="monotone" dataKey="usuarios" stroke="#2196F3" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <Button className="mt-4" onClick={exportarCSV}>Exportar CSV</Button>
    </div>
  );
}

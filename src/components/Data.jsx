const Data = ({data, nomeLista}) => {

  const formatarData = (data) => {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  };
  
  const cor = nomeLista === 'Pendentes' ? 'bg-[#FF575C]' : nomeLista === 'Em andamento' ? 'bg-[#FFC500]' : 'bg-[#00B11C]' 

  return (
    <div className={`${cor} px-1 rounded-[4px] flex items-center justify-center`}>
      <span className="text-white">{formatarData(data)}</span>
    </div>
  );
};

export default Data;

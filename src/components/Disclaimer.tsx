import { AlertCircle } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="bg-muted border border-border rounded-lg p-6 my-8">
      <div className="flex items-start space-x-3">
        <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-foreground mb-2">Aviso Importante</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Este site não oferece transmissão nem hospeda conteúdo ao vivo. Ele serve exclusivamente 
            para agregar e listar links que apontam para as transmissões e plataformas de streaming 
            oficiais. Apenas conectamos você às fontes originais.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;

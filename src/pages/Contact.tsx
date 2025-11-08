import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Início</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Contato</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">Contato</h1>
        <p className="text-muted-foreground mb-8">
          Entre em contato conosco. Estamos aqui para ajudar!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <MessageSquare className="h-6 w-6 mr-2 text-accent" />
              Envie sua Mensagem
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Assunto
                </label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Escreva sua mensagem..."
                  rows={6}
                />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                <Send className="h-4 w-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Mail className="h-6 w-6 mr-2 text-accent" />
                Informações de Contato
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">E-mail:</strong><br />
                  contato@futzone.com
                </p>
                <p>
                  <strong className="text-foreground">Suporte:</strong><br />
                  suporte@futzone.com
                </p>
                <p>
                  <strong className="text-foreground">Horário de Atendimento:</strong><br />
                  Segunda a Sexta: 9h às 18h
                </p>
              </div>
            </div>

            <div className="bg-muted border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">Tempo de Resposta</h3>
              <p className="text-sm text-muted-foreground">
                Normalmente respondemos em até 24 horas úteis. Para questões urgentes, 
                utilize o e-mail de suporte.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

'use client';

import { useState } from 'react';
import Link from 'next/link';

const Footer = () => {
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFormData(prev => ({
            ...prev,
            assunto: prev.assunto === value ? '' : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validação básica
        if (!formData.assunto) {
            setSubmitStatus('error');
            setStatusMessage('Por favor, selecione um assunto.');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setStatusMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                // Limpar formulário
                setFormData({
                    nome: '',
                    sobrenome: '',
                    email: '',
                    telefone: '',
                    assunto: '',
                    mensagem: ''
                });
            } else {
                setSubmitStatus('error');
                setStatusMessage(data.error || 'Erro ao enviar mensagem. Tente novamente.');
            }
        } catch (error) {
            setSubmitStatus('error');
            setStatusMessage('Erro ao enviar mensagem. Verifique sua conexão e tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer id="contato" className="relative w-full bg-blue-600 text-white overflow-hidden pl-[10%]">
            <div id="footer-title-form-draw" className="flex flex-col lg:flex-row w-full max-w-full justify-between">
                <div id="footer-title-form" className="relative z-10 flex flex-col mt-10">
                    {/* Title */}
                    <div id="footer-title" className="text-left mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold">Contato</h2>
                    </div>

                    <div id="footer-middle" className="flex flex-col pr-2">
                        {/* Form Section - Left Column */}
                        <div className="footer-form-section mb-5">
                            <form onSubmit={handleSubmit}>
                                {/* Nome e Sobrenome */}
                                <div className="input-row mb-6">
                                    <div>
                                        <label className="form-label required">Nome</label>
                                        <input
                                            type="text"
                                            name="nome"
                                            className="form-input"
                                            placeholder="Seu nome"
                                            value={formData.nome}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label required">Sobrenome</label>
                                        <input
                                            type="text"
                                            name="sobrenome"
                                            className="form-input"
                                            placeholder="Seu sobrenome"
                                            value={formData.sobrenome}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email e Telefone */}
                                <div className="input-row mb-6">
                                    <div>
                                        <label className="form-label required">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-input"
                                            placeholder="seu@email.com"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">Tel</label>
                                        <input
                                            type="tel"
                                            name="telefone"
                                            className="form-input"
                                            placeholder="(00) 00000-0000"
                                            value={formData.telefone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                {/* Assunto */}
                                <div className="mb-6 flex ">
                                    <label className="form-label required">Selecionar assunto</label>
                                    <div className="checkbox-group">
                                        {['Fornecedor', 'Parceria', 'Outros'].map((assunto) => (
                                            <label key={assunto} className="form-checkbox-label">
                                                <input
                                                    type="checkbox"
                                                    value={assunto.toLowerCase()}
                                                    checked={formData.assunto === assunto.toLowerCase()}
                                                    onChange={handleCheckboxChange}
                                                    className="form-checkbox"
                                                />
                                                {assunto}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Como podemos ajudar */}
                                <div className="mb-6">
                                    <label className="form-label required">Como podemos ajudar?</label>
                                    <textarea
                                        name="mensagem"
                                        className="form-textarea"
                                        placeholder="Descreva como podemos te ajudar..."
                                        value={formData.mensagem}
                                        onChange={handleInputChange}
                                        rows={4}
                                        required
                                    />
                                    <p className="text-blue-200 text-xs mt-2">* Campos obrigatórios</p>
                                </div>

                                {/* Botão Enviar */}
                                <div id="botao-social-icon" className="flex flex-row lg:flex-row justify-between items-center text-align-center">
                                    <button
                                        type="submit"
                                        className="form-button disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Enviando...' : 'Enviar'}
                                        {!isSubmitting && <span className="ml-2">→</span>}
                                    </button>
                                    <div className="pr-4 pb-2 block lg:hidden">
                                        {/* Social Icons */}
                                        <div className="flex justify-center space-x-4 mt-6">
                                            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                                <span className="text-blue-600 font-bold text-sm">in</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Status Message */}
                                {submitStatus !== 'idle' && (
                                    <div className={`mt-4 p-3 rounded-lg text-sm ${
                                        submitStatus === 'success'
                                            ? 'bg-green-500/20 text-green-100 border border-green-400'
                                            : 'bg-red-500/20 text-red-100 border border-red-400'
                                    }`}>
                                        {statusMessage}
                                    </div>
                                )}
                            </form>
                        </div>


                    </div>
                </div>
                <div id="footer-draw" className="hidden lg:block mr-[-1%] mt-[-1%]">
                    <img src="/footer_draw.png" alt="Footer Draw" className="w-full h-auto" />
                </div>
            </div>

            {/* Image Section - Right Column */}
            <div id="footer-bottom" className="flex flex-col lg:flex-row lg:justify-between lg:pr-[10%] lg:mb-5 lg:text-align-center">
                <div id="footer-bottom-logo-barra-contact" className="flex items-center space-x-6">
                    {/* Logo */}
                    <div className="hidden lg:block lg:mb-8">
                        <Link href="/" className="text-2xl font-bold text-gray-900">
                            <img src="/logo_lelume_footer.png" alt="Logo lelume" className='img-footer-logo' />
                        </Link>
                    </div>
                    {/* Barra vertical */}
                    <div className="hidden lg:block lg:h-32 lg:w-0.5 lg:bg-white"></div>
                    {/* Contact Info */}
                    <div className="lg:space-y-2 text-sm mr-10">
                        <p className="font-semibold">Shopping Internacional - Piso Térreo - Quiosque QM34</p>
                        <p>Rod. Pres. Dutra, 225 - Vila Itapegica</p>
                        <p>07034-911 - Guarulhos - SP</p>
                        <p>Cel: +55 11 99289-2495</p>
                        <p>www.lelume.com.br</p>
                    </div>
                </div>

                <div>
                    {/* Social Icons */}
                    <div className="hidden lg:flex lg:justify-end space-x-4 mt-6">
                        <a href="https://www.instagram.com/lelume.br?igsh=YzIyN3FwY2E2cnBj" target='_blank' className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <span className="text-blue-600 font-bold text-sm">in</span>
                        </a>
                    </div>
                    {/* Logo */}
                    <div className="justify-center lg:hidden flex mt-6">
                        <Link href="/" className="text-2xl font-bold text-gray-900">
                            <img src="/logo_lelume_footer.png" alt="Logo lelume" className='img-footer-logo' />
                        </Link>
                    </div>
                    {/* Footer Text */}
                    <div className="mt-8 text-xs text-blue-200">
                        <p>Preferência de cookies | Política de privacidade | © 2025 lelume.</p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

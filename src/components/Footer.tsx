'use client';

import { useState } from 'react';
import Link from 'next/link';

const Footer = () => {
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        telefone: '',
        assuntos: [] as string[],
        mensagem: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            assuntos: checked
                ? [...prev.assuntos, value]
                : prev.assuntos.filter(item => item !== value)
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Aqui você pode adicionar a lógica para enviar o formulário
    };

    return (
        <footer id="footer" className="relative w-full bg-blue-600 text-white overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 flex flex-col space-y-16">
                {/* Title */}
                <div id="footer-title"className="text-left">
                    <h2 className="text-4xl md:text-5xl font-bold">Contato</h2>
                </div>

                <div id="footer-middle"className="flex flex-col">
                    {/* Form Section - Left Column */}
                    <div className="footer-form-section mb-16">
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
                            <div className="mb-6">
                                <label className="form-label required">Selecionar assunto</label>
                                <div className="checkbox-group">
                                    {['Cliente', 'Fornecedor', 'Imprensa', 'Parceria', 'Vagas', 'Outros'].map((assunto) => (
                                        <label key={assunto} className="form-checkbox-label">
                                            <input
                                                type="checkbox"
                                                value={assunto.toLowerCase()}
                                                checked={formData.assuntos.includes(assunto.toLowerCase())}
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
                            <div>
                                <button type="submit" className="form-button">
                                    Enviar
                                    <span className="ml-2">→</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Image Section - Right Column */}
                    <div className="footer-image-section flex flex-col justify-between">
                        <div className="flex flex-row">
                            {/* Logo */}
                            <div className="mb-8">
                                <Link href="/" className="text-2xl font-bold text-gray-900">
                                    <img src="/logo_lelume_footer.png" alt="Logo lelume" className='img-footer-logo' />
                                </Link>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-2 text-sm">
                                <p className="font-semibold">GRU Airport</p>
                                <p>Terminal 1 - Rod. Hélio Smidt</p>
                                <p>07190-100 - Guarulhos - SP</p>
                                <p>Tel: +55.11.9919.5995</p>
                                <p>www.lelume.com.br</p>
                            </div>
                            <div>
                                {/* Social Icons */}
                                <div className="flex justify-center lg:justify-end space-x-4 mt-6">
                                    <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                        <span className="text-blue-600 font-bold text-sm">f</span>
                                    </a>
                                    <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                        <span className="text-blue-600 font-bold text-sm">@</span>
                                    </a>
                                    <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                        <span className="text-blue-600 font-bold text-sm">in</span>
                                    </a>
                                </div>

                                {/* Footer Text */}
                                <div className="mt-8 text-xs text-blue-200">
                                    <p>Preferência de cookies | Política de privacidade | © 2025 lelume.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

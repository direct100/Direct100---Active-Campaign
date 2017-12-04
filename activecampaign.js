//Contatos
let h3_TodosContatos = jQuery('#contactLists > div.ac_page-title > h3');
if(h3_TodosContatos.length) {
	if(~h3_TodosContatos.text().indexOf('All Contacts')) {
		h3_TodosContatos.text('Todos os Contatos');
	}
}

let div_ContatoTitle = jQuery('#contactLists > div.empty > div.title');
if(div_ContatoTitle.length) {
	if(~div_ContatoTitle.text().indexOf("You don't have any contacts")) {
		div_ContatoTitle.text('Não tem nenhum contato');
	}
}

let div_ContatoBody = jQuery('#contactLists > div.empty > div.body');
if(div_ContatoBody.length) {
	if(~div_ContatoBody.text().indexOf('Add or Import new contacts by clicking the "New Contact" button on the top right of the screen')) {
		div_ContatoBody.text('Adicione ou Importe novos contatos ao clicar no botão "Novo Contato" na parte superior direita do seu ecrã');
	}
}

let li_GerirScoring = jQuery('#ember894 > div > button.ac_button.main.button_medium.alt2 > span.action-text');
if(li_GerirScoring.length) {
	if(~li_GerirScoring.text().indexOf('Manage Scoring')) {
		li_GerirScoring.text('Gerir Scoring');
	}
}

let btn_NovoContato = jQuery('#ac_subheader-wrap > div.fright.contacts_index_subheader__buttonsright.campaign_buttonsright > a.ac_button.button_medium.alt1.contacts_index_subheader_add-contact > span');
if(btn_NovoContato.length) {
	if(~btn_NovoContato.html().indexOf('New Contact')) {
		btn_NovoContato.html(btn_NovoContato.html().replace('New Contact', 'Novo Contacto'));
	}
}

jQuery('button.popover-trigger.action-popover-trigger.ac_button.noicon').click(function(event) {
	setTimeout(function() {
		let menu_ContatosGerir = jQuery('.ac_popover-menu');

		if(menu_ContatosGerir.length) {
			if(~menu_ContatosGerir.html().indexOf('Manage Tags')) {
				menu_ContatosGerir.html(menu_ContatosGerir.html().replace('Manage Tags', 'Gerir Tags'));
			}

			if(~menu_ContatosGerir.html().indexOf('Manage Exclusions')) {
				menu_ContatosGerir.html(menu_ContatosGerir.html().replace('Manage Exclusions', 'Gerir Exclusões'));
			}

			if(~menu_ContatosGerir.html().indexOf('Personal Batch Actions')) {
				menu_ContatosGerir.html(menu_ContatosGerir.html().replace('Personal Batch Actions', 'Ações em lote'));
			}
		}

	}, 20);
});

//Formulários
let h4Modal_FormularioTitle = jQuery('#ember1114 > div > h4');
if(h4Modal_FormularioTitle.length) {
	if(~h4Modal_FormularioTitle.text().indexOf('Building forms just got easier')) {
		h4Modal_FormularioTitle.text('Contruir Formulários tornou-se mais fácil');
	}
}

let h4Modal_FormularioBody = jQuery('#modal-destination > div > div.modal-wrap.ember1112 > div > div > div.modal-body.text_center > p');
if(h4Modal_FormularioBody.length) {
	if(~h4Modal_FormularioBody.text().indexOf('Our new form builder makes it easy to create and customize all of your forms in one simple to use interface. Add forms to your page in a floating bar, floating box or even in a popup.')) {
		h4Modal_FormularioBody.text('O nosso novo criador de Formulários torna a criação e customização dos Formulários mais fácil com a sua interface simples. Adicione Formulários à sua página numa barra ou caixa flutuante ou até mesmo num popup');
	}
}

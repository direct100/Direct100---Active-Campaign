jQuery(window).load(function() {

	let path = window.location.pathname;

	//Contatos
	jQuery('#page_header > div.cf.hdrwrap > div.mainmenu.fleft > div > ul > li.mainmenu_ct').click(function(event) {
		setTimeout(function() {
			contactos();
		}, 100);
	});

	if(~path.indexOf('contacts')) {
		contactos();
	}

	//Formulários
	jQuery('#page_header > div.cf.hdrwrap > div.mainmenu.fleft > direitav > ul > li.mainmenu_fr').click(function(event) {
		setTimeout(function() {
			formularios();
		}, 100);
	});

	if(~path.indexOf('forms')) {
		formularios();
	}

});

function contactos() {
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

	let span_GerirScoring = jQuery('#ac_subheader-wrap > .contacts_index_subheader__buttonsleft > div > div > button > .action-text');
	if(span_GerirScoring.length) {
		if(~span_GerirScoring.text().indexOf('Manage Scoring')) {
			span_GerirScoring.text('Gerir Pontuação');
		}
	}

	let btn_NovoContato = jQuery('#ac_subheader-wrap > div.fright.contacts_index_subheader__buttonsright.campaign_buttonsright > a.ac_button.button_medium.alt1.contacts_index_subheader_add-contact > span');
	if(btn_NovoContato.length) {
		if(~btn_NovoContato.html().indexOf('New Contact')) {
			btn_NovoContato.html(btn_NovoContato.html().replace('New Contact', 'Novo Contacto'));
		}
	}

	let btn_ContatoEditAll = jQuery('.ac_button.nomargin.small.grey-border.edit-all');
	if(btn_ContatoEditAll.length) {
		if(~btn_ContatoEditAll.text().indexOf('Edit All')) {
			btn_ContatoEditAll.text('Editar Todos');
		}
	}

	jQuery('.popover-trigger.action-popover-trigger.ac_button.noicon').click(function(event) {
		setTimeout(function() {

			let btn_ContatoOptions = jQuery('.ac_popover-menu.action-popover-menu.ac_block');
			if(btn_ContatoOptions.length) {

				if(~btn_ContatoOptions.html().indexOf('Add Note')) {
					btn_ContatoOptions.html(btn_ContatoOptions.html().replace('Add Note', 'Adicionar Nota'));
				}

				if(~btn_ContatoOptions.html().indexOf('Delete Contact')) {
					btn_ContatoOptions.html(btn_ContatoOptions.html().replace('Delete Contact', 'Apagar Contato'));
				}

			}

		}, 20);
	});

	jQuery('button.popover-trigger.action-popover-trigger.ac_button.noicon').click(function(event) {
		setTimeout(function() {

			let menu_ContatosGerir = jQuery('.ac_popover-menu');
			if(menu_ContatosGerir.length) {
				if(~menu_ContatosGerir.html().indexOf('Manage Tags')) {
					menu_ContatosGerir.html(menu_ContatosGerir.html().replace('Manage Tags', 'Gerir Etiquetas'));
				}

				if(~menu_ContatosGerir.html().indexOf('Manage Exclusions')) {
					menu_ContatosGerir.html(menu_ContatosGerir.html().replace('Manage Exclusions', 'Gerir Exclusões'));
				}

				if(~menu_ContatosGerir.html().indexOf('Personal Batch Actions')) {
					menu_ContatosGerir.html(menu_ContatosGerir.html().replace('Personal Batch Actions', 'Ações em lote'));
				}

				if(~menu_ContatosGerir.html().indexOf('Manage Organizations')) {
					menu_ContatosGerir.html(menu_ContatosGerir.html().replace('Manage Organizations', 'Gerir Organizações'));
				}

				if(~menu_ContatosGerir.html().indexOf('Manage Tasks')) {
					menu_ContatosGerir.html(menu_ContatosGerir.html().replace('Manage Tasks', 'Gerir Tarefas'));
				}

				if(~menu_ContatosGerir.html().indexOf('Database Sync')) {
					menu_ContatosGerir.html(menu_ContatosGerir.html().replace('Database Sync', 'Sincronização Base de Dados'));
				}
			}

		}, 20);
	});

	jQuery('#ac_subheader-wrap > div.fright.contacts_index_subheader__buttonsright.campaign_buttonsright > a.ac_button.button_medium.alt1.contacts_index_subheader_add-contact').click(function(event) {
		setTimeout(function() {

			let h4Modal_ContatoTitle = jQuery('.modal-title');
			if(h4Modal_ContatoTitle.length) {
				if(~h4Modal_ContatoTitle.text().indexOf('Contact Profile')) {
					h4Modal_ContatoTitle.text('Perfil Contato');
				}
			}

			let label_ContatoTel = jQuery('#add-contact > div.modal-wrap.add-contact > div > div > div.modal-body > div:nth-child(4) > label');
			if(label_ContatoTel.length) {
				if(~label_ContatoTel.text().indexOf('Phone Number')) {
					label_ContatoTel.text('Telemóvel');
				}
			}

		}, 500);		
	});

	jQuery('#add-contact > div.modal-wrap.add-contact > div > div > div.modal-footer > button.ac_button.alt1.next').click(function(event) {
		setTimeout(function() {

			let btn_ContatoEditAll = jQuery('.ac_button.nomargin.small.grey-border.edit-all');
			if(btn_ContatoEditAll.length) {
				if(~btn_ContatoEditAll.text().indexOf('Edit All')) {
					btn_ContatoEditAll.text('Editar Todos');
				}
			}

			let spanModal_ContatoAv = jQuery('.ember-view.header.cf > div > span');
			if(label_ContatoTel.length) {
				if(~label_ContatoTel.text().indexOf('Advanced List Options')) {
					label_ContatoTel.text('Opções de Lista Avançadas');
				}
			}

			jQuery('.ember-view.header.cf > .fright').click(function(event) {
				setTimeout(function() {

					let divModal_ContatoAvOpen = jQuery('.ember-view');
					if(divModal_ContatoAvOpen.length) {

						if(~divModal_ContatoAvOpen.html().indexOf('Do not send any future Autoresponders')) {
							divModal_ContatoAvOpen.html(divModal_ContatoAvOpen.html().replace('Do not send any future Autoresponders', 'Não enviar futuras respostas automáticas'));
						}

						if(~divModal_ContatoAvOpen.html().indexOf('Send instant Autoresponders')) {
							divModal_ContatoAvOpen.html(divModal_ContatoAvOpen.html().replace('Send instant Autoresponders', 'Enviar respostas automáticas instantaneamente'));
						}

						if(~divModal_ContatoAvOpen.html().indexOf('Send the last distributed Campaign')) {
							divModal_ContatoAvOpen.html(divModal_ContatoAvOpen.html().replace('Send the last distributed Campaign', 'Enviar a última campanha distribuída'));
						}
					}

				}, 500);	
			});

		}, 500);		
	});
	
}

function formularios() {
	let h4Modal_FormularioTitle = jQuery('.modal-title');
	if(h4Modal_FormularioTitle.length) {
		if(~h4Modal_FormularioTitle.text().indexOf('Building forms just got easier')) {
			h4Modal_FormularioTitle.text('Contruir Formulários tornou-se mais fácil');
		}
	}

	let h4Modal_FormularioBody = jQuery('div.modal-body.text_center > p');
	if(h4Modal_FormularioBody.length) {
		if(~h4Modal_FormularioBody.text().indexOf('Our new form builder makes it easy to create and customize all of your forms in one simple to use interface. Add forms to your page in a floating bar, floating box or even in a popup.')) {
			h4Modal_FormularioBody.text('O nosso novo criador de Formulários torna a criação e customização dos Formulários mais fácil com a sua interface simples. Adicione Formulários à sua página numa barra ou caixa flutuante ou até mesmo num popup');
		}
	}

	let div_FormTitle = jQuery('#formLists > div.empty > div.title');
	if(div_FormTitle.length) {
		if(~div_FormTitle.text().indexOf("Doesn't look like you have any forms")) {
			div_FormTitle.text('Não tem nenhum Formulário');
		}
	}

	let div_FormBody = jQuery('#formLists > div.empty > div.body');
	if(div_FormBody.length) {
		if(~div_FormBody.text().indexOf('Create a new form by clicking the "New Form" button at the top right of the screen.')) {
			div_FormBody.text('Crie um novo Formulário ao clicar no butão "Novo Formulário" na parte superior direita do seu ecrã');
		}
	}

	let a_FormSidebarAll = jQuery('#uxleft_content > div > ul > li:nth-child(1) > a');
	if(a_FormSidebarAll.length) {
		if(~a_FormSidebarAll.text().indexOf('All Forms')) {
			a_FormSidebarAll.text('Todos os Formulários');
		}
	}

	let li_FormSidebarLabels = jQuery('#uxleft_content > div > ul > li.heading.mt10');
	if(li_FormSidebarLabels.length) {
		if(~li_FormSidebarLabels.html().indexOf('Labels')) {
			li_FormSidebarLabels.html(li_FormSidebarLabels.html().replace('Labels', 'Etiquetas'));
		}
	}


	let span_GerirCampos = jQuery('#ember872 > span.action-text');
	if(span_GerirCampos.length) {
		if(~span_GerirCampos.text().indexOf('Manage Fields')) {
			span_GerirCampos.text('Gerir Campos');
		}
	}

	let btn_NovoForm = jQuery('#ac_subheader-wrap > div.fright.campaign_buttonsright > a.ac_button.button_medium.alt1');
	if(btn_NovoForm.length) {
		if(~btn_NovoForm.html().indexOf('New Form')) {
			btn_NovoForm.html(btn_NovoForm.html().replace('New Form', 'Novo Formulário'));
		}
	}

	jQuery('button.popover-trigger.action-popover-trigger.ac_button.noicon').click(function(event) {
		setTimeout(function() {

			let menu_FormGerir = jQuery('.ac_popover-menu');
			if(menu_FormGerir.length) {
				if(~menu_FormGerir.html().indexOf('View App Directory')) {
					menu_FormGerir.html(menu_FormGerir.html().replace('View App Directory', 'Ver Directoria da Aplicação'));
				}
			}

		}, 20);
	});

}
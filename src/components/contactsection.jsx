import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { ModalContato } from './modalFrom/modal'

export const Contactsection = () => {
	const { t } = useTranslation();

	return (
		<>
			<Container className="mt-5">
				<Row className="centralized">
					<Col md="auto">
						<h1 className="textbold">{t('contact.title')} <span id="textdecoration">{t('contact.title1-2')}</span> {t('contact.title1-3')}</h1>
						<p className="p-subtitle centralized">{t('contact.subtitle')}</p>

						<Row className="centralized">
							{/* <Col  md="auto"><button className="BtnPrimary">{t('btn.btn_Orcamento')}</button></Col> */}
							<Col md="auto">
								<ModalContato>
									<button className="BtnSecundary">{t('btn.btn_Contact')}</button>
								</ModalContato>
								</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
}
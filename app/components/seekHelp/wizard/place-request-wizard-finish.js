import React from "react"
import {Result, Row, Col, Typography, Input, Button, Radio, Space, Form} from 'antd';
import PropTypes from "prop-types";
import PlaceRequestWizardNavigation from "./place-request-wizard-navigation";
import {NavLink} from "react-router-dom";
import AuthenticationContext from "../../../contexts/authentication";

const {Title} = Typography;
/**
 * Optional component of seek help wizard. Used, if user account has been found.
 * @returns {*}
 * @constructor
 */
export default function PlaceRequestWizardFinish({handlePreviousPage, handleNextPage, wizardState}) {
    const authenticationContext = React.useContext(AuthenticationContext);

    const userExistsContent = () => {
        return (
            <Title level={4}>Logge dich ein!</Title>
        )
    }

    const userNotExistsContent = () => {
        return (
            <Title level={4}>Erstellen Sie jetzt ein Benutzerkonto!</Title>
        )
    }

    return (
        <Result
            status={"success"}
            title={"Ihre Anfrage wurde entgegengenommen."}
            subTitle={"Unser Netzwerk aus freiwilligen Helferinnen und Helfern wurde benachrichtigt. Sie erhalten in Kürze eine Rückmeldung."}
            extra={[
                <NavLink to={"/"}><Button>Zurück zur Startseite</Button></NavLink>
            ]}
        />
    )
}

PlaceRequestWizardFinish.propTypes = {
    handleNextPage: PropTypes.func.isRequired,
    handlePreviousPage: PropTypes.func.isRequired,
    wizardState: PropTypes.object.isRequired
}
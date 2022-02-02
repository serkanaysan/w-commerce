import React from "react"
import { withTranslation } from "react-i18next"

const HomePage = ({ t }) => {
    
    const title = t('title')

    return (
        <div>
            Home Page<br />
            {title}
        </div>
    )
}

export default withTranslation()(HomePage)
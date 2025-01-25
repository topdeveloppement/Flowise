/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

export default function themeTypography(theme) {
    return {
        fontFamily: theme?.customization?.fontFamily,
        h6: {
            fontWeight: 500,
            color: theme.heading,
            fontSize: '0.75rem',
            letterSpacing: '-0.01em'
        },
        h5: {
            fontSize: '0.875rem',
            color: theme.heading,
            fontWeight: 500,
            letterSpacing: '-0.01em'
        },
        h4: {
            fontSize: '1rem',
            color: theme.heading,
            fontWeight: 600,
            letterSpacing: '-0.01em'
        },
        h3: {
            fontSize: '1.25rem',
            color: theme.heading,
            fontWeight: 600,
            letterSpacing: '-0.01em'
        },
        h2: {
            fontSize: '1.5rem',
            color: theme.heading,
            fontWeight: 700,
            letterSpacing: '-0.01em'
        },
        h1: {
            fontSize: '2.125rem',
            color: theme.heading,
            fontWeight: 700,
            letterSpacing: '-0.01em'
        },
        subtitle1: {
            fontSize: '0.875rem',
            fontWeight: 400,
            color: theme.textDark,
            letterSpacing: '-0.01em'
        },
        subtitle2: {
            fontSize: '0.75rem',
            fontWeight: 400,
            color: theme.darkTextSecondary,
            letterSpacing: '-0.01em'
        },
        caption: {
            fontSize: '0.75rem',
            color: theme.darkTextSecondary,
            fontWeight: 400,
            letterSpacing: '-0.01em'
        },
        body1: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: '1.334em',
            letterSpacing: '-0.01em'
        },
        body2: {
            letterSpacing: '-0.01em',
            fontWeight: 400,
            lineHeight: '1.334em',
            color: theme.darkTextPrimary,
            fontSize: '0.875rem'
        },
        button: {
            textTransform: 'none',
            fontWeight: 500,
            letterSpacing: '-0.01em'
        },
        customInput: {
            marginTop: 1,
            marginBottom: 1,
            '& > label': {
                top: 23,
                left: 0,
                color: theme.grey500,
                '&[data-shrink="false"]': {
                    top: 5
                }
            },
            '& > div > input': {
                padding: '30.5px 14px 11.5px !important'
            },
            '& legend': {
                display: 'none'
            },
            '& fieldset': {
                top: 0
            }
        },
        mainContent: {
            backgroundColor: theme.background,
            width: '100%',
            minHeight: 'calc(100vh - 88px)',
            flexGrow: 1,
            padding: '20px',
            marginTop: '88px',
            marginRight: '20px',
            borderRadius: `${theme?.customization?.borderRadius}px`
        },
        menuCaption: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: theme.heading,
            padding: '6px',
            textTransform: 'capitalize',
            marginTop: '10px'
        },
        subMenuCaption: {
            fontSize: '0.6875rem',
            fontWeight: 500,
            color: theme.darkTextSecondary,
            textTransform: 'capitalize'
        },
        commonAvatar: {
            cursor: 'pointer',
            borderRadius: '8px'
        },
        smallAvatar: {
            width: '22px',
            height: '22px',
            fontSize: '1rem'
        },
        mediumAvatar: {
            width: '34px',
            height: '34px',
            fontSize: '1.2rem'
        },
        largeAvatar: {
            width: '44px',
            height: '44px',
            fontSize: '1.5rem'
        }
    }
}

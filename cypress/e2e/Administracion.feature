Feature: Administration actions

    Background:
        Given The user logs in to the page as an administrator
        Then The user goes to Administracion page

    Scenario Outline: Check Administration buttons
        Then The user clicks on "administrarEtiquetasBtn" in the page "administracion"
        Then The page Administacion shows the following options <Options>

        Examples:
            | Options                             |
            | "Administrar usuarios"              |
            | "Administrar proyectos"             |
            | "Administrar etiquetas"             |
            | "Administrar Campos Personalizados" |
            | "Administrar Perfiles Globales"     |
            | "Administrar Plugins"               |
            | "Administrar Configuración"         |

    Scenario: Check Administration buttons
        Then The user clicks on "administrarEtiquetasBtn" in the page "administracion"
        Then The page Administacion shows the following options

    Scenario: Create a filter
        Then The user clicks on "administrarEtiquetasBtn" in the page "administracion"
        And The user creates a new tag with name: New tag78866; and description: New tag234 description
        And The element "etiquetasTableName" in page "administracion" should have text "New tag"

    Scenario: Update a filter
        Then The user clicks on "administrarEtiquetasBtn" in the page "administracion"
        And The user clicks on the first tag to "update" it
        And The page "tag_view_page.php?tag_id" should be visible
        And The user clicks on "actualizarEtiquetaButton" in the page "administrarEtiqueta"
        Then The user deletes text in element "nameInput" in page "actualizarEtiqueta"
        And The user types "new test name" in "nameInput" in page "actualizarEtiqueta"
        Then The user deletes text in element "descriptionArea" in page "actualizarEtiqueta"
        And The user types "new test description" in "descriptionArea" in page "actualizarEtiqueta"
        And The user clicks on "actualizarEtiquetaButton" in the page "actualizarEtiqueta"
        And The element "nombreField" in page "administrarEtiqueta" should have text "new test name"
        And The element "descripcionDeLaEtiquetaField" in page "administrarEtiqueta" should have text "new test description"

    @focus
    Scenario: Delete filters
        Then The user clicks on "administrarEtiquetasBtn" in the page "administracion"
        And The user clicks on the first tag to "delete" it
        And The page "tag_view_page.php?tag_id" should be visible
        And The user clicks on "eliminarEtiquetaButton" in the page "administrarEtiqueta"
        And The user clicks on "eliminarEtiquetaButton" in the page "administrarEtiqueta"
        And If there is more tags, the user delete all
        And The element "etiquetasTableName" in page "administracion" should "not.exist"



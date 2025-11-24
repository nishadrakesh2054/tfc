// Advanced structure with custom lists and filters
// This shows more advanced customization options

export const structureAdvanced = (S) =>
  S.list()
    .title("TFC Dashboard")
    .items([
      // Homepage Section
      S.listItem()
        .title("🏠 Homepage")
        .child(
          S.list()
            .title("Homepage")
            .items([
              S.documentTypeListItem("banner")
                .title("Slider")
                .icon(() => "🖼️"),
            ])
        ),

      // Team Section
      S.divider(),
      S.listItem()
        .title("👥 Team")
        .child(
          S.list()
            .title("Team Management")
            .items([
              S.documentTypeListItem("player")
                .title("Players")
                .child(
                  S.documentList()
                    .title("Players")
                    .filter('_type == "player"')
                    .defaultOrdering([{ field: "number", direction: "asc" }])
                ),
            ])
        ),

      // Media Section
      S.divider(),
      S.listItem()
        .title("📸 Media")
        .child(
          S.list()
            .title("Media")
            .items([S.documentTypeListItem("gallery").title("Gallery")])
        ),

      // Forms Section
      S.divider(),
      S.listItem()
        .title("📝 Forms")
        .child(
          S.list()
            .title("Form Submissions")
            .items([
              S.documentTypeListItem("contact")
                .title("Contact Messages")
                .child(
                  S.documentList()
                    .title("Contact Messages")
                    .filter('_type == "contact"')
                    .defaultOrdering([
                      { field: "_createdAt", direction: "desc" },
                    ])
                ),
            ])
        ),

      // All other document types
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["banner", "player", "gallery", "contact"].includes(listItem.getId())
      ),
    ]);

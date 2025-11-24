// sanity/deskStructure.ts
export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      // Homepage Section
      S.listItem()
        .title("Homepage")
        .child(
          S.list()
            .title("Homepage Content")
            .items([S.documentTypeListItem("banner").title("Slider")])
        ),

      // Main Content Section
      S.divider(),
      S.listItem()
        .title("Main Content")
        .child(
          S.list()
            .title("Main Content")
            .items([
              S.documentTypeListItem("player").title("Players"),
              S.documentTypeListItem("gallery").title("Gallery"),
            ])
        ),

      // Forms & Submissions Section
      S.divider(),
      S.listItem()
        .title("Submissions")
        .child(
          S.list()
            .title("Submissions")
            .items([
              S.documentTypeListItem("contact").title("Contact Messages"),
            ])
        ),

      // All Documents (for quick access)
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["banner", "player", "gallery", "contact"].includes(listItem.getId())
      ),
    ]);

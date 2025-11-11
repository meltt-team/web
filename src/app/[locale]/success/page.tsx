import Script from 'next/script'; 

async function SuccessPage({
  params,
}: PageProps<"/[locale]"> & {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  console.log('success locale:', locale);

  if (locale === "es") {
    return (
      <div className="h-screen flex items-center justify-center">
        <Script src="https://embed.typeform.com/next/embed.js" />
        <div data-tf-live="01K9T3YEDZDSRWCQTS99K5BK9Y"></div>
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <Script src="https://embed.typeform.com/next/embed.js" />
      <div data-tf-live="01K9SRMWZ8TT18WD0YNGB40EAZ"></div>
    </div>
  );
}

export default SuccessPage;

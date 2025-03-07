import SubPageLayout from "@/components/Layout/SubPageLayout";

export default function PrivacyPage() {
  return (
    <SubPageLayout
      title="Privacy Policy"
      subtitle="Learn how we handle and protect your personal information"
    >
      <div>
        <h2 className="text-sectifyGreen">Overview</h2>
        <p>
          Your privacy is important to us. This policy outlines how we collect,
          use, and protect your personal information...
        </p>

        <h2 className="text-sectifyGreen">Data Collection</h2>
        <p>Learn how we collect and process your data...</p>

      </div>
    </SubPageLayout>
  );
}

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, QrCode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface DonationDialogProps {
  children: React.ReactNode;
}

const DonationDialog = ({ children }: DonationDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  
  const upiId = "khanaslam80@okaxis";
  
  const copyUpiId = () => {
    navigator.clipboard.writeText(upiId);
    toast({
      title: "UPI ID Copied!",
      description: "UPI ID has been copied to your clipboard.",
    });
  };

  const generateQRCodeUrl = (upiId: string) => {
    // Generate QR code using qr-server.com API
    const upiUrl = `upi://pay?pa=${upiId}&pn=Ehsaas Foundation&cu=INR`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUrl)}`;
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-primary">
            Support Ehsaas Foundation
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {/* QR Code */}
          <div className="flex flex-col items-center space-y-4">
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <img 
                src={generateQRCodeUrl(upiId)} 
                alt="UPI QR Code for donation"
                className="w-48 h-48"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Scan the QR code with any UPI app to donate
            </p>
          </div>

          {/* UPI ID */}
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center space-x-2">
                <QrCode className="h-5 w-5 text-primary" />
                <span className="font-medium">UPI ID:</span>
                <span className="font-mono text-sm">{upiId}</span>
              </div>
              <Button 
                size="sm" 
                variant="outline"
                onClick={copyUpiId}
                className="h-8 px-3"
              >
                <Copy className="h-4 w-4 mr-1" />
                Copy
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Or copy the UPI ID and paste it in your UPI app
            </p>
          </div>

          {/* Thank you message */}
          <div className="text-center p-4 bg-foundation-light-blue/20 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Thank you for supporting our mission to transform lives. 
              Every contribution helps us reach more communities in need.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationDialog;
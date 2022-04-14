import React, { useCallback, useState, useEffect } from "react";

import { usePaystackPayment } from "react-paystack";

import { Boxed } from "../../../components/Boxed.components";
import { Text } from "../../../components/Text.components";
import { Button } from "../../../components/Button.components";
import { Alert } from "../../../components/Alert.components";
import { Checkbox } from "../../../components/Input.components";
import { ModalComponent } from "../../../components/Modal.components";

import {
  PAYSTACK_KEY,
  PAYSTACK_BASIC,
  PAYSTACK_BASIC_YEARLY,
  PAYSTACK_PROF,
  PAYSTACK_PROF_YEARLY,
} from "../../../utils/config";
import { calcViewMode, hash, formatCurrency } from "../../../utils/utils";
import { Theme } from "../../../utils/theme";
import { PageTitle, Icon } from "../../../components/style";

export const PaymentModal = (props) => {
  // State props
  const {
    openPaymentModal,
    subscriptionPlan,
    subscriptionDetail,
    isLoading,
    paymentDetail,
  } = props;

  // Dispatch props
  const { verifyPayment, closeModal, redirect } = props;
  const { email, access_token } = subscriptionDetail;

  const redirectCallback = useCallback((value) => redirect(value), [redirect]);

  const [terms, setTerms] = useState(false);

  let viewMode = calcViewMode();

  const config = {
    reference: paymentDetail.reference,
    email: paymentDetail.email,
    amount: paymentDetail.amount,
    publicKey: PAYSTACK_KEY,
  };

  // you can call this function anything
  const onSuccess = (response) => {
    // Implementation for whatever you want to do with reference and after success call.

    let data = {
      reference: response.reference,
      access_token,
      subscriptionDetail,
    };
    verifyPayment(data);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.

    closeModal();
  };

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <Button
        disabled={!terms || isLoading}
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Confirm
      </Button>
    );
  };

  let errors;
  return (
    <>
      <ModalComponent
        show={openPaymentModal}
        onHide={closeModal}
        title={<PageTitle>Subcription </PageTitle>}
        footer={
          <>
            <Button pale onClick={closeModal}>
              Cancel
            </Button>
            <PaystackHookExample />
          </>
        }
      >
        <Boxed pad="10px 0">
          <Text fontWeight="normal">
            Your account will be charged{" "}
            <b>
              ₦{" "}
              {`${
                paymentDetail?.actual_amount &&
                formatCurrency(paymentDetail?.actual_amount || 0)
              }`}
            </b>
            , plus applicable taxes for 1 active user[s].
          </Text>
        </Boxed>
        <Boxed pad="0.5rem 1rem">
          <Checkbox
            checked={terms}
            onClick={() => setTerms((prev) => !prev)}
            name="terms"
            fontSize={Theme.SecondaryFontSize}
          >
            <Text
              color={Theme.PrimaryTextColor}
              fontSize={Theme.SecondaryFontSize}
            >
              I agree to the Terms of Service and Fair Billing Policy
            </Text>
          </Checkbox>
        </Boxed>
      </ModalComponent>
    </>
  );
};
